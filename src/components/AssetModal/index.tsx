import { Button, Form, Image, Input } from "antd"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAsset } from "../../modules/store/assets/actions"

export const AssetModal = ({ modalIsOpen, onClick, assetId, setAssetId }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAsset(assetId.id))
    }, [assetId.id])


    const assetState = useSelector((state) => state?.assets?.assetData)

    const { id, image, status, name, healthscore } = assetState

    const waitAsset = assetId.id === id

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const newState = {
        status,
        name,
        healthscore
    }


    return (
        <div style={{ padding: 10, height: 'auto', width: 'auto', backgroundColor: 'white', border: '1px solid black', zIndex: 100, position: 'absolute' }}>
            {waitAsset ?
                <div>
                    <button onClick={onClick}>X</button>
                    <Image src={image} />
                    <Form initialValues={{ name, status, healthscore }} onFinish={onFinish} >
                        <Form.Item name='name'>
                            <Input placeholder={name} />
                        </Form.Item>
                        <Form.Item name='status'>
                            <Input placeholder={status} />
                        </Form.Item>
                        <Form.Item name='healthscore'>
                            <Input placeholder={healthscore} />
                        </Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                : <h1>Loading</h1>}
        </div >

    )
}