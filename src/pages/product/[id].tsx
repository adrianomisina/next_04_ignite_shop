import { useRouter } from "next/router";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

const Product = () => {
    const {query} = useRouter()
    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>

            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Repellendus assumenda explicabo porro est amet illo inventore soluta unde quam modi quod illum aspernatur,
                    laudantium blanditiis provident iusto, qui doloribus quis!
                </p>

                <button>
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}

export default Product;