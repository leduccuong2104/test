import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button>Doanh thu</Button>
                <Button>
                    <Link to="/goods" style={{textDecoration: 'none', color: 'white'}}>
                        Sản phẩm
                    </Link>
                </Button>
                <Button>Three</Button>
            </ButtonGroup>
        </div>
    )
}
