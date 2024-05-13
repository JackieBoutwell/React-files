import { useState } from 'react'
import Button from './Button'

export default function Calculator() {
     const [displayValue, setDisplayValue] = useState(0)
    
    return (
        <>
            
        <div>
            {displayValue}
        </div>
            < Button btnName="0" />
            < Button btnName="1" />
            < Button btnName="2" />
            < Button btnName="3" />
            < Button btnName="4" />
            < Button btnName="5" />
            < Button btnName="6" />
            < Button btnName="7" />
            < Button btnName="8" />
            < Button btnName="9" />
            < Button btnName="-" />
            < Button btnName="+" />
            < Button btnName="*" />
            < Button btnName="/"/>
                </>
    )
}

