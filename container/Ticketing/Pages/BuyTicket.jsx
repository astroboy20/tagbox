import React from 'react'
import { useOptionContext } from '@/features/Axios/OptionContext'
import { TicketingStyle } from '../Ticketing.style'
const BuyTicket = () => {
    const {option} =useOptionContext()
  return (
    <div>
        {option === "Buy" && (
            <TicketingStyle>
                Buy
            </TicketingStyle>
        )}
    </div>
  )
}

export  {BuyTicket}