
import { Categories } from './components/Categories/Categories'
import { Main } from './components/Header/Main'
import { MainPromo } from './components/PromoTemplate/MainPromo'
import { RelatedProducts } from './components/RelatedProducts/RelatedProducts'
export const App = () => {
  return (
    <div>
      <Main />
      <MainPromo />
      <Categories />
      <RelatedProducts />
    </div>)
}