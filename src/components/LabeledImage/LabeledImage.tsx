import "./LabeledImage.css";

type LabeledImageProps = {
  src: string;
  alt?: string;
  label: string;
  className?: string;
};

function LabeledImage({ src, alt = "", label, className = "" }: LabeledImageProps) {
  return (
    <div className={`labeled-image-container ${className}`}>
      <img src={src} alt={alt} className="labeled-image" />
      <div className="labeled-image-label">{label}</div>
    </div>
  );
}

export default LabeledImage;
