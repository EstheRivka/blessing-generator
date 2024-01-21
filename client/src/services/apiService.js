
const serverEndpoint = 'http://localhost:3200'; 

 

const sendBlessingDataToServer = async (blessingData) => {

    debugger

    try {

        const response = await fetch(`${serverEndpoint}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(blessingData),
        });
        if (!response.ok) {
            throw new Error('Failed to send data to the server');
        }
        const responseData = await response.json();
        console.log(responseData);
        return responseData;
    }
    catch (error) {

        console.error('Error sending data to the server:', error.message);
        throw error;
    }
};

export { sendBlessingDataToServer };