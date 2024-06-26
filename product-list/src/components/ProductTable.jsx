import ProductRow from "./ProductRow"
import ProductCategory from "./ProductCategory"

function ProductTable({filterText, inStockOnly, products}) {

    let rows = []
    let lastCategory = null

    products.forEach((product) => {
     if (!product.name.includes(filterText)) {
            return;            
        }
        if (inStockOnly && !product.stocked) {
            return;            
        }
        
        if ( product.category !== lastCategory) {
            rows.push(
                <ProductCategory
                    key={product.category}
                    category={product.category}
                />
            )
        }
        rows.push(
            <ProductRow
                key={product.name}
                product={product}
            /> 
        )
        lastCategory = product.category
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
   
    )
}


export default ProductTable