import { getProducts } from '../../api-client/product-api'
import ProductTile from '../../components/product-tile'
import HeadTitle from '../../components/head-title/head=title'
import Footer from '../../components/footer/footer'
import BackToHome from '../../components/back-to-home'

export default function ProductList({ products }) {
    return (
        <div className='container'>
            <HeadTitle title='Products SSG' />
            <BackToHome />
            <main className='main'>
                <h1 className='title'>Products SSG</h1>
                <div className='grid'>
                    {products.map(product => (
                        <ProductTile
                            key={product.id}
                            product={product}
                            uri={`/products-ssg/${encodeURIComponent(product.id)}`}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export async function getStaticProps() {
    return {
        props: {
            products: await getProducts(),
        },
    }
}
