import { Audio } from  'react-loader-spinner'


const Loader = () => {
    return (
        <div className="loader">
            <Audio
                type="Audio"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000}
            />
        </div>
    );
}

export default Loader;