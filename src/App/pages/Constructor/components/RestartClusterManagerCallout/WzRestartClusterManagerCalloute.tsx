interface IWzRestartClusterManagerCalloutProps {
    onRestarted: () => void;
    onRestartedError: () => void;
}
const WzRestartClusterManagerCallout = ({onRestarted, onRestartedError}: IWzRestartClusterManagerCalloutProps) => {
    return (
        <>
            WzRestartClusterManagerCallout
        </>
    );
};

export default WzRestartClusterManagerCallout;