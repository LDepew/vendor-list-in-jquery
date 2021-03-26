$().ready(() => {

    $("#create").click(() => {
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
        vendorCreate(vendor)
        .done((res) => {
            console.log("Create successful:", res);
        })
        .fail((err) => {
            console.error("Create failed:", err);
        })
    });
});