export function adaptTo(externalEntity) {
    const entities = convertFromResponse(externalEntity);
    
    //pertenece al Model del negocio
    return entities.map(entity => {
        return {
            id: entity.id,
            title: entity.title,
            price: entity['sale_price/amount'],
            symbol: entity['price/symbol'],
            image: entity['image/src'],
            image2x: entity['image/src2x'],
            availableQuantity: entity.available_quantity,
            status: entity.status,
        }
    });
}

/*
    convierte la respuesta 
*/
export function convertFromResponse(jsonData) {
    const names = jsonData.values.shift();//['key1','key2',...'keyN']
    const values = jsonData.values;//['value1','value2'...'valuen']

    const articulos = values.map(x => {
        {
            let jsonRow = {};
            for (let i = 0; i < names.length; i++) {
                jsonRow = {
                    ...jsonRow,
                    [names[i]]: x[i]
                }
            }
            return jsonRow;
        }
    });
    return articulos;
}