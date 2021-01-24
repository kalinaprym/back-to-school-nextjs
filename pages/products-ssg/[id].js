import { getProducts, getSingleProduct } from '../../api-client/product-api'
import ProductTile from '../../components/product-tile'
import HeadTitle from '../../components/head-title/head=title'
import Footer from '../../components/footer/footer'
import BackToHome from '../../components/back-to-home'

export default function Product({ product }) {
    return (
        <div className='container'>
            <BackToHome />
            <HeadTitle title='Products SSG' />
            <main className='main'>
                <h1 className='title'>Products SSG</h1>
                <div className='grid'>
                    <ProductTile product={product} />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export async function getStaticPaths() {
    const products = await getProducts()
    const paths = products.map(product => `/products-ssg/${product.id}`)

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    return {
        props: {
            product: await getSingleProduct(params.id),
        },
    }
}
