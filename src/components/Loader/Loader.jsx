import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


export const Loader = () => {
    return (
        <SkeletonTheme baseColor="blue" highlightColor="yellow">
          <p>
            <Skeleton count={70} />
          </p>
        </SkeletonTheme>
      );
}