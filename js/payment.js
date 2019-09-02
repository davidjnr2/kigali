 
        const API_publicKey = "FLWPUBK-24b72aebb821aea177483039677df9d3-X";
        function payWithRave() {
            var userEmail =document.querySelector('#email').value;
            var userPhone = document.querySelector('#phone').value;
            
            var x = getpaidSetup({
                PBFPubKey: API_publicKey,
                customer_email: userEmail,
                amount: 200,
                customer_phone: userPhone,
                currency: "USD",
                txref: "rave-123456",
                custom_title: `online Software Developement training course`,
                custom_logo: "https://res.cloudinary.com/ayorich/image/upload/v1566553076/AYODELE_KAYODE_rlrxzq.jpg",
                customer_firstname:'Ayodele',
                meta: [{
                    metaname: "flightID",
                    metavalue: "AP1234"
                }],
                onclose: function () { },
                callback: function (response) {
                    var txref = response.tx.txRef; // collect txRef returned and pass to a server page to complete status check.
                    console.log("This is the response returned after a charge", response);
                    if (
                        response.tx.chargeResponseCode == "00" ||
                        response.tx.chargeResponseCode == "0"
                    ) {
                        // redirect to a success page
                    } else {
                        // redirect to a failure page.
                    }

                    x.close(); // use this to close the modal immediately after payment.
                }
            });
        }
    