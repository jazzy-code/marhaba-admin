import { Grid, Skeleton } from "@mui/material"
import PropTypes from "prop-types"

const SkeletonLoading = ({ type = "general", size }: { type?: string; size?: number }) => {
  return (
    <>
      {type === "cards" && (
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, lg: 4, md: 4 }}>
            <Skeleton animation="wave" variant="rounded" width="100%" height={150} sx={{ marginBottom: "1rem" }} />
          </Grid>
          <Grid size={{ xs: 12, lg: 4, md: 4 }}>
            <Skeleton animation="wave" variant="rounded" width="100%" height={150} sx={{ marginBottom: "1rem" }} />
          </Grid>
          <Grid size={{ xs: 12, lg: 4, md: 4 }}>
            <Skeleton animation="wave" variant="rounded" width="100%" height={150} sx={{ marginBottom: "1rem" }} />
          </Grid>
        </Grid>
      )}
      {type === "content_big" && (
        <>
          <Skeleton animation="wave" variant="rounded" width="100%" height={20} sx={{ marginBottom: "1rem" }} />
          <Skeleton animation="wave" variant="rounded" width="100%" height={20} sx={{ marginBottom: "1rem" }} />
          <Skeleton animation="wave" variant="rounded" width="100%" height={400} sx={{ marginBottom: "1rem" }} />
        </>
      )}
      {type === "content_small" && (
        <>
          <Skeleton animation="wave" variant="rounded" width="100%" height={20} sx={{ marginBottom: "1rem" }} />
          <Skeleton animation="wave" variant="rounded" width="100%" height={20} sx={{ marginBottom: "1rem" }} />
          <Skeleton animation="wave" variant="rounded" width="100%" height={100} sx={{ marginBottom: "1rem" }} />
        </>
      )}
      {type === "table" &&
        (size ? (
          [...Array(size).keys()].map((item) => {
            return (
              <Grid key={item} container rowSpacing={1} columnSpacing={1} sx={{ padding: ".5rem" }}>
                <Grid size={4}>
                  <Skeleton animation="wave" variant="rounded" width="100%" height={25} />
                </Grid>
                <Grid size={3}>
                  <Skeleton animation="wave" variant="rounded" width="100%" height={25} />
                </Grid>
                <Grid size={4}>
                  <Skeleton animation="wave" variant="rounded" width="100%" height={25} />
                </Grid>
                <Grid size={1}>
                  <Skeleton animation="wave" variant="circular" height={25} width={25} />
                </Grid>
                <Grid size={4}>
                  <Skeleton animation="wave" variant="rounded" width="100%" height={25} />
                </Grid>
                <Grid size={3}>
                  <Skeleton animation="wave" variant="rounded" width="100%" height={25} />
                </Grid>
                <Grid size={4}>
                  <Skeleton animation="wave" variant="rounded" width="100%" height={25} />
                </Grid>
                <Grid size={1}>
                  <Skeleton animation="wave" variant="circular" height={25} width={25} />
                </Grid>
              </Grid>
            )
          })
        ) : (
          <Grid container rowSpacing={1} columnSpacing={1} sx={{ padding: ".5rem" }}>
            <Grid size={4}>
              <Skeleton animation="wave" variant="rounded" width="100%" height={25} />
            </Grid>
            <Grid size={3}>
              <Skeleton animation="wave" variant="rounded" width="100%" height={25} />
            </Grid>
            <Grid size={4}>
              <Skeleton animation="wave" variant="rounded" width="100%" height={25} />
            </Grid>
            <Grid size={1}>
              <Skeleton animation="wave" variant="circular" height={25} width={25} />
            </Grid>
            <Grid size={4}>
              <Skeleton animation="wave" variant="rounded" width="100%" height={25} />
            </Grid>
            <Grid size={3}>
              <Skeleton animation="wave" variant="rounded" width="100%" height={25} />
            </Grid>
            <Grid size={4}>
              <Skeleton animation="wave" variant="rounded" width="100%" height={25} />
            </Grid>
            <Grid size={1}>
              <Skeleton animation="wave" variant="circular" height={25} width={25} />
            </Grid>
          </Grid>
        ))}
      {type === "datatable" &&
        (size ? (
          [...Array(size).keys()].map((item) => {
            return (
              <Grid key={item} container rowSpacing={2} columnSpacing={2} sx={{ padding: ".5rem" }}>
                <Grid size={3}>
                  <Skeleton animation="wave" variant="rounded" width="100%" height={30} />
                </Grid>
                <Grid size={2}>
                  <Skeleton animation="wave" variant="rounded" width="100%" height={30} />
                </Grid>
                <Grid size={2}>
                  <Skeleton animation="wave" variant="rounded" width="100%" height={30} />
                </Grid>
                <Grid size={2}>
                  <Skeleton animation="wave" variant="rounded" width="100%" height={30} />
                </Grid>
                <Grid size={2}>
                  <Skeleton animation="wave" variant="rounded" width="100%" height={30} />
                </Grid>
                <Grid size={1} sx={{ display: "flex" }}>
                  <Skeleton animation="wave" variant="circular" height={30} width={30} />
                  <Skeleton animation="wave" variant="circular" height={30} width={30} />
                </Grid>
              </Grid>
            )
          })
        ) : (
          <Grid container rowSpacing={1} columnSpacing={1} sx={{ padding: ".5rem" }}>
            <Grid size={4}>
              <Skeleton animation="wave" variant="rounded" width="100%" height={25} />
            </Grid>
            <Grid size={3}>
              <Skeleton animation="wave" variant="rounded" width="100%" height={25} />
            </Grid>
            <Grid size={4}>
              <Skeleton animation="wave" variant="rounded" width="100%" height={25} />
            </Grid>
            <Grid size={1}>
              <Skeleton animation="wave" variant="circular" height={25} width={25} />
            </Grid>
            <Grid size={4}>
              <Skeleton animation="wave" variant="rounded" width="100%" height={25} />
            </Grid>
            <Grid size={3}>
              <Skeleton animation="wave" variant="rounded" width="100%" height={25} />
            </Grid>
            <Grid size={4}>
              <Skeleton animation="wave" variant="rounded" width="100%" height={25} />
            </Grid>
            <Grid size={1}>
              <Skeleton animation="wave" variant="circular" height={25} width={25} />
            </Grid>
          </Grid>
        ))}
    </>
  )
}

SkeletonLoading.propTypes = {
  type: PropTypes.oneOf(["cards", "content_small", "content_big", "table", "datatable"]).isRequired,
  size: PropTypes.number
}

export default SkeletonLoading
