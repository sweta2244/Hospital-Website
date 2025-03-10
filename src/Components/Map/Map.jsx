export default function Map() {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",aspectRatio:"1/0.5"}}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.4271499920897!2d84.89632437548553!3d27.016665276585332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399354f5fdc0ec11%3A0x9afff6cdaa985a6!2sThe%20Himal%20Institute%20of%20Health%20Science!5e0!3m2!1sen!2snp!4v1741570422508!5m2!1sen!2snp"
        width="80%"
        height="80%"
        style={{ border:"0"}}
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
