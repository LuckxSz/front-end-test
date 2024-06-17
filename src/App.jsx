
import { Brands } from './components/Brands/Brands'
import { Categories } from './components/Categories/Categories'
import { Footer } from './components/Footer/Footer'
import { Main } from './components/Header/Main'
import { Partners } from './components/Partners/Partners'
import { MainPromo } from './components/PromoTemplate/MainPromo'
import { RelatedProducts } from './components/RelatedProducts/RelatedProducts'
export const App = () => {
  return (
    <div>
      <Main />
      <MainPromo />
      <Categories />
      <RelatedProducts />
      <Partners />
      <Brands />
      <Footer />
    </div>)
}