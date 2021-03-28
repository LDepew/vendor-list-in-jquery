//let id = $("#vid").val();
//should be onclick()


$().ready(()=>{
    console.log("jQuery is ready!");
    let id = $("#pid").val();
    console.log("id = " + id);
        vendorDetail(id)
        .done((vendor) => {
            display(vendor);
            console.log(vendor);
        })
        .fail((err) => {
            alert("Vendor not found!");
        });
    


    $("#update").click(() => {

        let vendor = {
            id: $("#pid").val(),
            code: $("#pcode").val(),
            name: $("#pname").val(),
            address: $("#paddress").val(),
            city: $("#pcity").val(),
            state: $("#pstate").val(),
            zip: $("#pzip").val(),
            phoneNumber: $("#pphone").val(),
            email: $("#pemail").val()
        }
        console.log(vendor);
        console.debug("vendor before:", vendor);
        vendorCreate(vendor)
            .done((res)=> {
                console.log("Update successful:",res);
            })
            .fail((err) => {
                console.error("update failed:",err);
            });
    });
});

const display = (vendor) => {
    $("#pid").val(vendor.id);
    $("#pcode").val(vendor.code);
    $("#pname").val(vendor.name);
    $("#paddress").val(vendor.address);
    $("#pcity").val(vendor.city);
    $("#pstate").val(vendor.state);
    $("#pzip").val(vendor.zip);
    $("#pphone").val(vendor.phoneNumber ?? "NA");
    $("#pemail").val(vendor.email ?? "NA");
    }