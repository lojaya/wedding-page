/* eslint-disable @next/next/no-img-element */
export default function Credit({ title, subtitle, dates }) {
  return (
    <section
      className="footer-copyright spacer-double-sm bg-white text-center"
      style={{ paddingBottom: 0 }}
    >
      <h6 className="mb-0 text-dark-gray">{title}</h6>
      <h1 className="mb-0 font-secondary text-dark-gray">{subtitle}</h1>
      <h6 className="mb-0 text-dark-gray">{dates}</h6>

      <div
        style={{
          maxWidth: "400px",
          width: "auto",
          margin: "0 auto",
          paddingTop: "40px",
        }}
      >
        <img style={{ width: "100%" }} src="/flower-footer.png" alt="" />
      </div>
    </section>
  );
}
