import { Button, Grid, IconButton } from "@material-ui/core";
import styles from "../Button/index.module.css";

export default function ButtonTeste(){

    function click(){
        alert("Clickado");
    }
    return(
        <Grid container 
              justifyContent="space-around"
              alignItems="center">
            <Grid>
                <Button variant="contained" color="secondary" href="https://pt-br.facebook.com/">
                    Link
                </Button>
            </Grid>
            
            <Grid>
                <Button variant="contained" disabled>
                    Disable
                </Button>
            </Grid>

            <Grid>
                <Button variant="contained" color="secondary">
                    Primary
                </Button>
            </Grid>

            <Grid>
                <Button disableElevation variant="contained" color="secondary">
                    Disable elevation
                </Button>
            </Grid>

            <Grid>
                <Button color="secondary"
                        href="https://www.instagram.com/">
                    Instagram
                </Button>
            </Grid>

            <Grid>
                <Button color="secondary"
                        variant="outlined"
                        href="https://v4.mui.com/pt/components/buttons/#contained-buttons">
                    Outlined
                </Button>
            </Grid>

            <Grid>
                <Button color="secondary"
                        variant="outlined"
                        onClick={() => click()}
                        >
                    Função Click
                </Button>
            </Grid>

            
        </Grid>
    );
}