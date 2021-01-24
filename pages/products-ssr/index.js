import { getProducts } from '../../api-client/product-api'
import ProductTile from '../../components/product-tile'
import HeadTitle from '../../components/head-title/head=title'
import BackToHome from '../../components/back-to-home'

export default function ProductList({ products }) {
    return (
        <div className='container'>
            <BackToHome />
            <HeadTitle title='Products SSR' />
            <main className='main'>
                <h1 className='title'>Products SSR</h1>
                <div className='grid'>
                    {products.map(product => (
                        <ProductTile
                            key={product.id}
                            product={product}
                            uri={`/products-ssr/${encodeURIComponent(product.id)}`}
                        />
                    ))}
                </div>
            </main>
        </div>
    )
}

export async function getServerSideProps() {
    return {
        props: {
            products: await getProducts(),
        },
    }
}
