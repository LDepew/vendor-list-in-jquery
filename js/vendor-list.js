let allVendors = [];

$().ready(() => {

    vendorList()
        .done((vendors) => {
            console.log("Vendors:", vendors);
            display(vendors);
        })

})

const display = (vendors) => {
    let tbody = $("tbody");
    tbody.empty();
    for(let vendor of vendors) {
        let tr = $("<tr></tr>");
        tr.append( $(`<td>${vendor.id}</td>`) );
        tr.append($(`<td>${vendor.code}</td>`));
        tr.append($(`<td>${vendor.name}</td>`));
        let tdAddr = $(`<td>${vendor.address}, ${vendor.city}, ${vendor.state} ${vendor.zip}</td> `);
        tr.append(tdAddr)
        tbody.append(tr);
    }
}