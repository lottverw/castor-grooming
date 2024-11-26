export const useContact = () => {
    return useAsyncData('contactInfo', () =>
        $fetch('/api/contact'),
        { server: true }
    );
};