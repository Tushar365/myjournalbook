import React, { useState } from 'react';

export default function RatingComponent() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const [allRatings, setAllRatings] = useState<Array<{rating: number, feedback: string, timestamp: Date}>>([]);

  const handleRating = (value: number) => {
    setRating(value);
    setHasRated(true);
  };

  const handleSubmit = () => {
    if (rating > 0) {
      // Add the new rating to the list
      setAllRatings([...allRatings, {
        rating,
        feedback,
        timestamp: new Date()
      }]);
      
      setShowThankYou(true);
      setTimeout(() => {
        setShowThankYou(false);
        // Reset form
        setRating(0);
        setFeedback('');
        setHasRated(false);
      }, 3000);
    }
  };

  // Calculate average rating
  const averageRating = allRatings.length > 0 
    ? (allRatings.reduce((sum, r) => sum + r.rating, 0) / allRatings.length).toFixed(1)
    : '0.0';

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8 sm:py-12">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-purple-200 p-6 sm:p-8 lg:p-10 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl" />
        
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 sm:mb-3">
              Rate Your Experience
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm lg:text-base px-2">
              Help us make MyJournalBook even better for you
            </p>
          </div>

          {/* Star Rating */}
          <div className="flex justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                className="transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 rounded-full p-1"
                aria-label={`Rate ${star} stars`}
              >
                <svg
                  className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 transition-all duration-200 ${
                    star <= (hover || rating)
                      ? 'fill-yellow-400 stroke-yellow-500 drop-shadow-lg'
                      : 'fill-gray-200 stroke-gray-300'
                  }`}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </button>
            ))}
          </div>

          {/* Rating text */}
          {rating > 0 && (
            <p className="text-center text-base sm:text-lg font-semibold text-purple-600 mb-4 sm:mb-6 animate-fade-in px-2">
              {rating === 5 && "⭐ Amazing! We're thrilled!"}
              {rating === 4 && "😊 Great! Thanks for the feedback!"}
              {rating === 3 && "👍 Good! We'll keep improving!"}
              {rating === 2 && "🤔 We appreciate your honesty!"}
              {rating === 1 && "😔 We're sorry. Help us improve!"}
            </p>
          )}

          {/* Feedback textarea */}
          {hasRated && (
            <div className="mb-4 sm:mb-6 animate-fade-in">
              <label htmlFor="feedback" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 text-left">
                Tell us more (optional)
              </label>
              <textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="What did you like? What could we improve?"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none transition-all duration-200"
                rows={3}
              />
            </div>
          )}

          {/* Submit button */}
          {hasRated && (
            <button
              onClick={handleSubmit}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
            >
              Submit Feedback
            </button>
          )}

          {/* Thank you message */}
          {showThankYou && (
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl text-center animate-fade-in">
              <p className="text-green-700 text-sm sm:text-base font-semibold flex items-center justify-center gap-2">
                <span className="text-xl sm:text-2xl">🎉</span>
                Thank you for your feedback!
                <span className="text-xl sm:text-2xl">🎉</span>
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Display all ratings */}
      {allRatings.length > 0 && (
        <div className="mt-6 sm:mt-8 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-purple-200 p-4 sm:p-6 lg:p-8">
          {/* Average Rating Summary */}
          <div className="text-center mb-6 sm:mb-8 pb-4 sm:pb-6 border-b-2 border-purple-100">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-2 sm:mb-3">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {averageRating}
              </div>
              <div>
                <div className="flex gap-0.5 sm:gap-1 mb-1 justify-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ${
                        star <= Math.round(parseFloat(averageRating))
                          ? 'fill-yellow-400 stroke-yellow-500'
                          : 'fill-gray-200 stroke-gray-300'
                      }`}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">
                  {allRatings.length} {allRatings.length === 1 ? 'rating' : 'ratings'}
                </p>
              </div>
            </div>
          </div>

          {/* Individual Ratings */}
          <div className="space-y-3 sm:space-y-4 max-h-80 sm:max-h-96 overflow-y-auto">
            {allRatings.slice().reverse().map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 border border-purple-200 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-2 gap-2">
                  <div className="flex gap-0.5 sm:gap-1 flex-shrink-0">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${
                          star <= item.rating
                            ? 'fill-yellow-400 stroke-yellow-500'
                            : 'fill-gray-200 stroke-gray-300'
                        }`}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 font-medium whitespace-nowrap">
                    {item.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                {item.feedback && (
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words">
                    &ldquo;{item.feedback}&rdquo;
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}