import { useState, useEffect } from 'react';
import axios from 'axios';

export function useAuth() {
    const apiEndpoint = 'https://bo.duhanicapital.com';
    const apiVersion = '1';
    const apiKey = '5C9F6D90-5A83-4ECA-8741-8E09627AE5F2';

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [authToken, setAuthToken] = useState<string>('');
    const [countryCode, setCountryCode] = useState<string>('');
    const [countryId, setCountryId] = useState<string>('');
    const [userLogin, setUserLogin] = useState<string>(localStorage.getItem("userLogin") || "");
    const [accessToken, setAccessToken] = useState<string>(localStorage.getItem("access_token") || "");
    const [passwordRef, setPasswordRef] = useState<string>(generateRandomPassword(16));

    // Function to generate a random password
    function generateRandomPassword(length: number): string {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }

    // Function to get country code based on IP
    const getCountryCode = async () => {
        try {
            const response = await axios.get("https://ipapi.co/json/");
            setCountryCode(response.data.country_code);
        } catch (error) {
            console.error("Failed to fetch country code:", error);
        }
    };

    // Function to get country ID based on country code
    const getCountryId = async () => {
        try {
            const response = await axios.post(
                'https://your-country-id-endpoint', // Replace with actual country ID endpoint
                { country_code: countryCode },
                {
                    headers: {
                        "Content-Type": "application/json",
                        api_key: apiKey,
                    },
                }
            );
            if (response.status === 200 && response.data.success) {
                const country = response.data.data.find(
                    (code: any) => code.iso_alpha2_code === countryCode
                );
                setCountryId(country.country_id);
            }
        } catch (error) {
            console.error("Failed to fetch country ID:", error);
        }
    };

    // Login function
    const login = async () => {
        setErrorMessage('');
        try {
            const response = await axios.post(
                apiEndpoint,
                new URLSearchParams({
                    login: username,
                    password: password,
                }),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'api_key': apiKey,
                    },
                }
            );

            if (response.data.success) {
                const token = response.data.data[0].authentication_token;
                setAuthToken(token);
                localStorage.setItem('access_token', token);
                localStorage.setItem('userLogin', username);
                setUserLogin(username);
                setUsername('');
                setPassword('');
                setErrorMessage('');
            } else {
                setErrorMessage(response.data.info.message || 'An error occurred.');
            }
        } catch (error: any) {
            console.error('Login failed', error);
            setErrorMessage('Failed to log in. Please try again.');
        }
    };

    // Register function
    const register = async () => {
        // Pre-set username and password
        setUsername("bintang.tobing");
        setPassword("Duhani64");
        await login(); // Perform login first

        await getCountryCode(); // Get country code
        await getCountryId(); // Get country ID

        try {
            const response = await axios.post(
                `${apiEndpoint}/register`, // Replace with the actual registration endpoint
                new URLSearchParams({
                    login: userLogin,
                    access_token: accessToken,
                    on_submit: "AUTO_LOGIN",
                    verify: "0",
                    account: "1",
                    create_company: "0",
                    company: "",
                    currency: "USD",
                    password: passwordRef,
                    password2: passwordRef,
                    is_ib: "0",
                    label: "",
                    tag: "",
                    language: "",
                    introducer: "",
                    sidi: "",
                    sidc: "",
                    httpref: "",
                    auto_responder: "",
                    // Marketing Tracking Ads (example)
                    utm_source: "",
                    utm_medium: "",
                    utm_campaign: "",
                    utm_term: "",
                    utm_content: "",
                    utm_device: "",
                    utm_creative: "",
                    utm_network: "",
                    // End of tracking ads
                    emailInstantNotification: "PROFILECREATED",
                    lead_method: "SIGNUP",
                    targetval: "_self",
                    tc_confirmed: "1",
                    client_agreement: "1",
                    country_id: countryId,
                    fname: "Bintang",
                    lname: "TEST",
                    email: "bintang.testV4Markets@gmail.com",
                    tel_number: "83145537564",
                })
            );
            if (response.status === 200) {
                console.log("Registration successful:", response.data);
            }
        } catch (error) {
            console.error("Registration failed:", error);
        }
    };

    return {
        username,
        setUsername,
        password,
        setPassword,
        errorMessage,
        authToken,
        login,
        register,
    };
}
