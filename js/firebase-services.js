// ============================================
//  GharKhoj — Firebase Services
//  Initialises Firebase + all Firestore ops
// ============================================

import { initializeApp }                          from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc,
         getDocs, getDoc, doc, query,
         where, orderBy, limit,
         serverTimestamp }                         from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ── Firebase Config ───────────────────────────
// ✅ Your project credentials (gharkhoj-cf8c7)
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyBVrTyU6P6wbnNB4aRdcdZm6wObQsNnkMw",
  authDomain:        "gharkhoj-cf8c7.firebaseapp.com",
  projectId:         "gharkhoj-cf8c7",
  storageBucket:     "gharkhoj-cf8c7.firebasestorage.app",
  messagingSenderId: "830156171583",
  appId:             "1:830156171583:web:364a5e363207702adb0b8a",
  measurementId:     "G-KZ2W9NL068"
};

// ── Init ──────────────────────────────────────
const app     = initializeApp(FIREBASE_CONFIG);
const db      = getFirestore(app);

// ── Collections ───────────────────────────────
const LISTINGS_COL = "listings";   // approved live listings
const PENDING_COL  = "pending";    // awaiting admin review

// ─────────────────────────────────────────────
//  READ: Load approved listings
//  Replaces the static JSON fetch in core.js
// ─────────────────────────────────────────────
async function loadListingsFromFirestore() {
  try {
    const q = query(
      collection(db, LISTINGS_COL),
      where("status", "==", "approved"),
      orderBy("postedAt", "desc")
    );
    const snap = await getDocs(q);
    const listings = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    allListings = listings;
    return listings;
  } catch (err) {
    console.error("Firestore read error:", err);
    if (err.message && err.message.includes("index")) {
      console.warn("👉 Firestore needs a composite index. Open the link in this error message to create it automatically (one click).");
    }
    // Fallback to JSON if Firestore fails
    return loadListings();
  }
}

// ─────────────────────────────────────────────
//  READ: Single listing by Firestore doc ID
// ─────────────────────────────────────────────
async function getListingById(docId) {
  try {
    const snap = await getDoc(doc(db, LISTINGS_COL, docId));
    if (snap.exists()) return { id: snap.id, ...snap.data() };
    // fallback: try pending collection
    const pSnap = await getDoc(doc(db, PENDING_COL, docId));
    if (pSnap.exists()) return { id: pSnap.id, ...pSnap.data() };
    return null;
  } catch (err) {
    console.error("getListingById error:", err);
    return null;
  }
}

// ─────────────────────────────────────────────
//  WRITE: Submit a new listing (goes to pending)
// ─────────────────────────────────────────────
async function submitListing(formData) {
  const imageUrls = (formData.images || []).filter(Boolean).slice(0, 5);

  const listing = {
    title:       formData.title,
    type:        formData.type,
    purpose:     formData.purpose,
    price:       Number(formData.price),
    price_label: formatPriceLabel(Number(formData.price), formData.purpose),
    city:        formData.city,
    district:    formData.city,       // default same as city
    location:    formData.location,
    area:        formData.area || "",
    bedrooms:    Number(formData.beds),
    bathrooms:   Number(formData.baths),
    description: formData.description,
    features:    formData.features || [],
    contact:     formData.phone,
    whatsapp:    formData.phone.replace(/\D/g, ""),
    images:      imageUrls,
    verified:    false,
    featured:    false,
    status:      "pending",           // admin must approve
    submittedBy: {
      name:  formData.name,
      email: formData.email || "",
      phone: formData.phone,
    },
    postedAt:    serverTimestamp(),
    posted:      new Date().toISOString().split("T")[0],
    lat:         0,
    lng:         0,
  };

  const docRef = await addDoc(collection(db, PENDING_COL), listing);
  return docRef.id;
}

// ─────────────────────────────────────────────
//  ADMIN: Load all pending listings
//  (only works if Firestore rules allow admin)
// ─────────────────────────────────────────────
async function loadPendingListings() {
  const q    = query(collection(db, PENDING_COL), orderBy("postedAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// ─────────────────────────────────────────────
//  ADMIN: Approve a pending listing
//  Moves it to the live listings collection
// ─────────────────────────────────────────────
async function approveListing(pendingId) {
  const { setDoc, deleteDoc } = await import(
    "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js"
  );
  const pendingRef = doc(db, PENDING_COL, pendingId);
  const snap       = await getDoc(pendingRef);
  if (!snap.exists()) throw new Error("Pending listing not found");

  const data = { ...snap.data(), status: "approved", approvedAt: serverTimestamp() };
  await setDoc(doc(db, LISTINGS_COL, pendingId), data);
  await deleteDoc(pendingRef);
  return pendingId;
}

// ─────────────────────────────────────────────
//  ADMIN: Reject / delete a pending listing
// ─────────────────────────────────────────────
async function rejectListing(pendingId) {
  const { deleteDoc } = await import(
    "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js"
  );
  await deleteDoc(doc(db, PENDING_COL, pendingId));
}

// ─────────────────────────────────────────────
//  Helper: format price label for storage
// ─────────────────────────────────────────────
function formatPriceLabel(n, purpose) {
  let label = "";
  if (n >= 10000000)      label = `Rs ${(n / 10000000).toFixed(1)} Crore`;
  else if (n >= 100000)   label = `Rs ${(n / 100000).toFixed(1)} Lakh`;
  else if (n >= 1000)     label = `Rs ${(n / 1000).toFixed(0)}K`;
  else                    label = `Rs ${n.toLocaleString()}`;
  if (purpose === "rent") label += "/mo";
  return label;
}

export {
  db,
  loadListingsFromFirestore,
  getListingById,
  submitListing,
  loadPendingListings,
  approveListing,
  rejectListing,
};
