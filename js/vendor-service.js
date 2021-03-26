const url = "http://localhost:8080/api/vendors/";

const vendorList = () => {
    return $.getJSON(url);
}

const vendorDetail = (id) => {
    return $.getJSON(`${url} ${id}`);
}