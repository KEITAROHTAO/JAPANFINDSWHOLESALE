import { STORE } from "@/lib/store";

export default function StoreDetails() {
  return (
    <section className="storeDetails" aria-label="Warehouse location, hours and contact details">
      <h2>Visit Our Biñan Warehouse</h2>
      <div className="storeDetailsGrid">
        <div>
          <h3>Location</h3>
          <address>
            <strong>JAPAN FINDS WHOLESALE</strong><br />
            {STORE.address}<br />
            {STORE.landmark}
          </address>
          <a className="outlineButton" href={STORE.mapsUrl} target="_blank" rel="noopener noreferrer">
            Open in Google Maps
          </a>
        </div>
        <div>
          <h3>Opening Hours</h3>
          <p>{STORE.hours}<br /><strong>{STORE.closed}</strong></p>
          <h3>Contact Us</h3>
          <p>
            Phone: <a href={`tel:${STORE.phoneInternational}`}>{STORE.phone}</a><br />
            Email: <a href={`mailto:${STORE.email}`}>{STORE.email}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
