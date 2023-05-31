import { IProduct } from '@/types/product.interface'
import { FC } from 'react'

const Product: FC<IProduct> = ({product}) => {
	return <div>{product}</div>
}

export default Product