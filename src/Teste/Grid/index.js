import { Grid } from "@material-ui/core";
import styles from "../Grid/index.module.css";

//Testes usando o grid como container

export default function Teste() {
    return(
        <Grid container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={12}>
            <Grid className={styles.box3}>
                <h1>Titulo</h1>
            </Grid>
            <Grid>
                <h2>titulo 2</h2>
            </Grid>
            <Grid>
                <h3>titulo 3</h3>
            </Grid>
            <div className={styles.box1}>
                <Grid>
                    <h4>titulo 4</h4>
                </Grid>
            </div>
        </Grid>
    );
}