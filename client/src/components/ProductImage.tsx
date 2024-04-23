import "../styling/ProductImage.css";

interface Props {
  imageURL: string;
}

/**
 * Display the image of the product
 */
function ProductImage({ imageURL }: Props) {
  return (
    <div className="prod-image">
      <img className="prod-image-src" src={imageURL} />
    </div>
  );
}

export default ProductImage;
