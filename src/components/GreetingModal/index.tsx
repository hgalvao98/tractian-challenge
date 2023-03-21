import { RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Highcharts from 'highcharts';
import { HighchartsReact } from 'highcharts-react-official';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useShallowEqualSelector } from '../../hooks';
import { getAllWork } from '../../modules/store/workorders/actions';

export const GreetingModal = ({ colorBgContainer }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllWork())
    }, [])

    const { workorder } = useShallowEqualSelector((state) => {
        return ({
            workorder: state.workorders.data,
        })
    })

    const ordersCompleted = workorder && workorder.filter((item) => item.status === 'completed')
    const ordersInProgress = workorder && workorder.filter((item) => item.status === 'in progress')

    const chart1 = {
        chart: {
            type: 'pie',
            backgroundColor: 'rgba(0,0,0,0)'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        legend: {
            backgroundColor: null,
        },
        series: [{
            name: 'Status',
            data: [{
                name: 'Completed',
                y: ordersCompleted?.length,
            }, {
                name: 'In Progress',
                y: ordersInProgress?.length,
            }]
        }],
    }

    return (
        <div>
            <h1>Company's Progress</h1>
            <div className='home__greetings__main' style={{ padding: 24, minHeight: 'auto', width: '100%', borderRadius: '20px', background: colorBgContainer }}>
                <div style={{ width: '50%' }}>
                    <h3>Hi, User1!</h3>
                    <h1>You have {ordersCompleted?.length} workorder(s) completed and {ordersInProgress?.length} workorder(s) in progress!</h1>
                    <Button>SEE WORKORDERS <RightOutlined /></Button>

                </div>
                <HighchartsReact highcharts={Highcharts} options={chart1} />
            </div>
        </div>
    )
}