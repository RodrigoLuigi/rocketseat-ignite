import { Icon } from 'phosphor-react'
import { CheckoutFormHeaderContainer } from './styles'

interface CheckoutFormHeaderProps {
  icon: Icon
  title: string
  description: string
}

export function CheckoutFormHeader({
  icon: Icon,
  title,
  description,
  ...rest
}: CheckoutFormHeaderProps) {
  return (
    <CheckoutFormHeaderContainer title={title} {...rest}>
      {Icon && <Icon size={22} />}
      <div className="form-header-info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </CheckoutFormHeaderContainer>
  )
}
