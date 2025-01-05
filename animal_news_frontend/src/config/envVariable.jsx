const backendUrl = import.meta.env.BACKEND_URL ? import.meta.env.BACKEND_URL : 'http://host.docker.internal:8080';

export default backendUrl;