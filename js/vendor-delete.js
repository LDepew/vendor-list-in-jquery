let vendor = null;

$().ready(() => {
    
    $("button").click(() => {
        let id = $("#vid").val();
        vendorDetail(id)
        .done((vendor) => {
            display(vendor);
        })
        .fail((err) => {
            alert("Vendor not found!");
        });
    });
    
});

const display = (vendor) => {
    $("#pid").text(vendor.id);
    $("#pcode").text(vendor.code);
    $("#pname").text(vendor.name);
    $("#paddr").text(vendor.address);
    $("#pcity").text(vendor.city);
    $("#pstate").text(vendor.state);
    $("#pzip").text(vendor.zip);
    $("#pphone").text(vendor.phoneNumber ?? "NA");
    $("#pemail").text(vendor.email ?? "NA");

    $("#delete").click(() => {
        let vendor = {
            id: 0,
            code: $("#pcode").val(),
            name: $("#pname").val(),
            address: $("#paddr").val(),
            city: $("#pcity").val(),
            state: $("#pstate").val(),
            zip: $("#pzip").val(),
            phone: $("#pphone").val(),
            email:$("#pemail").val(),
        }
        console.debug("Vendor b4:", vendor);
        vendorDelete(vendor)
        .done((res) => {
            console.log("Delete successful:", res);
        })
        .fail((err) => {
            console.error("Delete failed:", err);
        })
    });
}