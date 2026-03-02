import ProdutoItem from '../components/ProdutoItem';

export default function Home() {
    return (
        <main
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: '#f1f5f9',
                padding: '40px'
            }}
        >
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '70px',
                    width: '100%',
                    maxWidth: '1000px'
                }}
            >
                <ProdutoItem />
            </div>
        </main>
    );
}