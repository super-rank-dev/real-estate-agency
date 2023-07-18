// Base Icon component that extracts icons from the sprite.svg file
export default function SpriteIcon({ name, ...restProps }) {
    return (
        <svg {...restProps}>
            <use xlinkHref={`images/sprite.svg#icon-${name}`} />
        </svg>
    )
}
