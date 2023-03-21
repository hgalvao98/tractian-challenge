import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useShallowEqualSelector } from "../../hooks"
import { getAllUnits } from '../../modules/store/units/actions'
import { Unit } from '../../types'

export const UnitsHome = ({ colorBgContainer }) => {
    const dispatch = useDispatch()

    const { units } = useShallowEqualSelector((state) => {
        return ({
            //fix this reducer/saga problem
            units: state.units.data,
        })
    })

    useEffect(() => {
        dispatch(getAllUnits())
    }, [])

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '40%' }}>
            <h1>Units</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {units?.map((unit: Unit) => {
                    return (
                        <div key={unit.id} style={{ padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '20px', background: colorBgContainer, height: '50%' }}>
                            <p>
                                {unit?.name}
                            </p>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}