import { getProducts, getSingleProduct } from '../../api-client/product-api'
import ProductTile from '../../components/product-tile/product-tile'
import HeadTitle from '../../components/head-title/head-title'
import Footer from '../../components/footer/footer'
import BackToHome from '../../components/back-to-home/back-to-home'
import Navigation from '../../components/navigation/navigation'
import { useRouter } from 'next/router'

export default function Product({ product }) {
    const router = useRouter()

    // if (router.isFallback) {
    //     return <div>Loading...</div>
    // }

    return (
        <div className='container'>
            <Navigation />
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
    // code here
}

export async function getStaticProps({ params }) {
    // code here
}
