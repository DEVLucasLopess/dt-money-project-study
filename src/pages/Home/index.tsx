import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import { useContext } from 'react'
import {
  PriceHightlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'

/**
 * Os motivos que o componente renderiza:

 * 1 - Hooks change (mudou estado, contexto, reducer);
 * 2 - Props changed (mudou propriedades);
 * 3 - parent rerendered ( componente pai renderizou );
 **/

export function Home() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <table>
            <tbody>
              {transactions.map((transactions) => {
                return (
                  <tr key={transactions.id}>
                    <td width="50%">{transactions.description}</td>
                    <td>
                      <PriceHightlight variant={transactions.type}>
                        {priceFormatter.format(transactions.price)}
                      </PriceHightlight>
                    </td>
                    <td>{transactions.category}</td>
                    <td>
                      {dateFormatter.format(new Date(transactions.createAt))}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  )
}
