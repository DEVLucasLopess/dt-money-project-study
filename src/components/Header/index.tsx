import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import logoImg from '../../assets/img/logo-1.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} />

        <Dialog.Root>
          <NewTransactionModal />

          {/* O "asChild" vai fazer o "NewTransactionButton" ser o botão principal, sem o asChild o Dialog.Trigger tbm vira um botão e fica dois boteos */}
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
