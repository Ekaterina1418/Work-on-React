import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import {
  SkeletonContainer,
  SkeletonImage,
  SkeletonName,
} from './UserStyled/SkeletonStyled'
function UsersSkeleton({ user }) {
  return Array(user)
    .fill(0)
    .map((item, index) => (
      <div key={index}>
        <SkeletonTheme baseColor="#F3F3F6" highlightColor="#FAFAFA">
          <SkeletonContainer>
            <SkeletonImage>
              <Skeleton circle width={74} height={74} />
            </SkeletonImage>

            <SkeletonName>
              <h3>
                <Skeleton borderRadius={50} width={140} />
              </h3>
              <p>
                <Skeleton borderRadius={50} width={80} />
              </p>
            </SkeletonName>
          </SkeletonContainer>
        </SkeletonTheme>
      </div>
    ))
}

export default UsersSkeleton
