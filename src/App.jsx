import { LinearGradient } from '@components/ui/LinearGradient'
import Header from './components/navbar/Navbar'
import HeroBanner from '@components/herobanner/HeroBanner'
import ListComponent from '@components/list/ListComponent'
import Text from '@components/text/Text'
import TableComponent from '@components/table/TableComponent'
import BikeTable from '@components/table/BikeTable'
import PremiumTable from '@components/table/PremiumTable'
import Testimonial from '@components/testimonial/Testominial'


function App() {

  return (
 <>
 <LinearGradient/>
 <Header/>
 <HeroBanner/>
 <ListComponent/>
 <Text/>
 <TableComponent title={'Types of bike Insurance'} className={'bg-lightblue'} tableComponent={<BikeTable/>}/>
 <TableComponent title={'2Wheeler Insurance Premiums - Third Party'}  tableComponent={<PremiumTable/>}/>
<Testimonial/>
 </>
  )
}

export default App
