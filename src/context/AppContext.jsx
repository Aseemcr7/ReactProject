import { useEffect, useState } from 'react';
import { AppContext } from './AppContextObject';

export function AppProvider({ children }) {
    const [appData, setAppData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch(
                    'https://localhost:7014/api/auth/me',
                    {
                        credentials: 'include'
                    }
                );

                if (!response.ok) {
                    setAppData(null);
                }

                const data = await response.json();

                setAppData(data);

            } catch (error) {
                console.log(error);
                setAppData(null);
            }
            finally {
                setLoading(false);
            }
        };
        checkAuth();
    }, []);


    return (
        <AppContext.Provider value={{ appData, setAppData }}>
            {children}
        </AppContext.Provider>
    );
}