import { ButtonGroup, Grid, Button } from "@mui/material";

export default function ButtonGroupTeste(){
    return(

        //Variants variam de contained, outlined,text
        //aria-label variam de "outlined primary button group","outlined button group","text button group"
        //size e color podem ser usados para controlar a aparência do grupo de botões
             //size : small, large
             //color : primary, secondary
        //o grupo de botões pode ser exibido verticalmente usando o orientation prop
        //você pode remover a elevação com o disableElevation
        <Grid   container 
                justifyContent="space-around"
                alignItems="center">
                <Grid>
                    <ButtonGroup size="large" color="secondary" variant="contained" aria-label="outlined primary button group">
                        <Button>1</Button>
                        <Button>2</Button>
                        <Button>3</Button>
                    </ButtonGroup>
                </Grid>
                
                <Grid>
                    <ButtonGroup size="small"  variant="outlined" aria-label="outlined button group">
                        <Button>1</Button>
                        <Button>2</Button>
                        <Button>3</Button>
                    </ButtonGroup>
                </Grid>

                <Grid>
                    <ButtonGroup disableElevation variant="text" orientation="vertical" aria-label="text button group">
                        <Button>1</Button>
                        <Button>2</Button>
                        <Button>3</Button>
                    </ButtonGroup>
                </Grid>

        </Grid>
    );
}