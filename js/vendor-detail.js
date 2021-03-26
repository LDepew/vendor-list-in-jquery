let singleVendor = null;

$().ready(() => {

        vendorDetail(2)
        .done((vendor) => {
            singleVendor = vendor;
            display(singleVendor);
        })
})

const display = (vendor) => {
    $("#pid").text(vendor.id);
    $("#pcode").text(vendor.code);
    $("#pname").text(vendor.name);
    $("#paddr").text(vendor.address);
    $("#pcity").text(vendor.city);
    $("#pstate").text(vendor.state);
    $("#pzip").text(vendor.zip);
    $("#pphone").text(vendor.phone);
    $("#pemail").text(vendor.email);
}