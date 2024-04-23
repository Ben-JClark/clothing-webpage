import "../styling/ProductImage.css";

interface Props {
  imageURL: string;
}

function ProductImage({ imageURL }: Props) {
  return (
    <div className="prod-image">
      <img className="prod-image-src" src={imageURL} />
    </div>
  );
}

export default ProductImage;
