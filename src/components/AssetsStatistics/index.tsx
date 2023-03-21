import { Progress } from "antd";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useShallowEqualSelector } from "../../hooks";
import { getAllAssets } from "../../modules/store/assets/actions";


export const AssetsStatistics = ({ colorBgContainer }) => {
    const dispatch = useDispatch()

    const { assets } = useShallowEqualSelector((state) => {
        return ({
            //fix this reducer/saga problem
            assets: state.assets.data,
        })
    })

    const assetsInOperation = assets && assets.filter((item) => item.status === 'inOperation')
    const assetsInDowntime = assets && assets.filter((item) => item.status === 'inDowntime')
    const assetsInAlert = assets && assets.filter((item) => item.status === 'inAlert')


    useEffect(() => {
        dispatch(getAllAssets())
    }, [])

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <h1>Assets' Statistics</h1>
            <div style={{ display: 'flex', flexDirection: 'row', gap: 10, }}>
                <div style={{ padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '30%', borderRadius: '20px', background: colorBgContainer }}>
                    <Progress size={100} strokeColor='#52C41A' type="circle" percent={(assetsInOperation?.length / assets?.length * 100).toFixed()} />
                    <p>In Operation</p>
                </div>
                <div style={{ padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '30%', borderRadius: '20px', background: colorBgContainer }}>
                    <Progress size={100} strokeColor='#F7C800' type="circle" percent={(assetsInDowntime?.length / assets?.length * 100).toFixed()} />
                    <p>In Downtime</p>
                </div>
                <div style={{ padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '30%', borderRadius: '20px', background: colorBgContainer }}>
                    <Progress size={100} strokeColor='#FF4D4F' type="circle" percent={(assetsInAlert?.length / assets?.length * 100).toFixed()} />
                    <p>In inAlert</p>
                </div>
            </div>
        </div >
    )
}