import { Layout, theme } from 'antd';
import Search from 'antd/es/input/Search';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AssetCard } from '../../../components/AssetCard';
import { AssetModal } from '../../../components/AssetModal';
import { useShallowEqualSelector } from '../../../hooks';
import { getAllAssets } from '../../../modules/store/assets/actions';
import { Asset } from '../../../types';
import './styles.scss';


const Assets = () => {
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState('')
    const [assetId, setAssetId] = useState()
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const { allAssetsData } = useShallowEqualSelector((state) => {
        return ({
            allAssetsData: state.assets?.allAssetsData
        })
    })

    const returnSearch = [...allAssetsData.filter((search: Asset) => search.name.toLowerCase().includes(searchValue.toLowerCase()))]

    const onSearch = (value: string) => setSearchValue(value);

    useEffect(() => {
        dispatch(getAllAssets())
    }, [])



    const handleModalIsOpen = (id) => {
        setAssetId(returnSearch.find(x => x.id === id));
        setModalIsOpen(true);
    }

    const handleModalClose = () => {
        setModalIsOpen(false);
        setAssetId({})
    }

    return (
        <Layout className='assets__content'>
            <Search placeholder="Asset"
                allowClear
                onSearch={onSearch} />
            <p>Search for your assets</p>
            <div className='assets__cards'>
                {returnSearch.map((asset) => {
                    return (
                        <AssetCard onClick={() => handleModalIsOpen(asset.id)} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} key={asset.id} assetData={asset} />
                    )
                })}
            </div>
            {modalIsOpen && <AssetModal onClick={handleModalClose} setAssetId={setAssetId} assetId={assetId} />}
        </Layout>
    )
};


export default Assets;