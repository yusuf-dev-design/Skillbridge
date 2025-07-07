import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import Sidebar from '@/Components/Sidebar/Sidebar';


export default function JobsCreate({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        description: '',
        requirements: '',
        location: '',
        salary_range: '',
        employment_type: '',
        experience_level: '',
        skills_required: [],
        deadline: '',
    });

    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!data.title || !data.description || !data.requirements || !data.location || 
            !data.employment_type || !data.experience_level || !data.deadline) {
            return;
        }

        post(route('jobs.store'), {
            onSuccess: () => {
                setShowSuccess(true);
                reset();
                setTimeout(() => {
                    window.location = route('jobs.index');
                }, 1500);
            }
        });
    };

    return (
        <>
            <Head title="Post a Job" />
            <div className="flex">
                <Sidebar userType={auth.user.user_type} />
                <div className="flex-1 p-8 bg-gray-50">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-3xl font-bold text-gray-900 mb-8">Post a New Job</h1>

                        {showSuccess && (
                            <Alert className="mb-6 bg-green-50 text-green-800 border border-green-200">
                                Job posted successfully! Redirecting...
                            </Alert>
                        )}

                        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6 space-y-6">
                            {/* Job Title */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Job Title <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={data.title}
                                    onChange={e => setData('title', e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="e.g. Senior Software Engineer"
                                    required
                                />
                                {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
                            </div>

                            {/* Job Description */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Description <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    value={data.description}
                                    onChange={e => setData('description', e.target.value)}
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Detailed job description..."
                                    required
                                />
                                {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
                            </div>

                            {/* Requirements */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Requirements <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    value={data.requirements}
                                    onChange={e => setData('requirements', e.target.value)}
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Job requirements..."
                                    required
                                />
                                {errors.requirements && <p className="mt-1 text-sm text-red-600">{errors.requirements}</p>}
                            </div>

                            {/* Location, Salary, Employment Type, and Experience Level */}
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Location <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={data.location}
                                        onChange={e => setData('location', e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="e.g. New York, NY"
                                        required
                                    />
                                    {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Salary Range
                                    </label>
                                    <input
                                        type="text"
                                        value={data.salary_range}
                                        onChange={e => setData('salary_range', e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="e.g. $80,000 - $120,000"
                                    />
                                    {errors.salary_range && <p className="mt-1 text-sm text-red-600">{errors.salary_range}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Employment Type <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        value={data.employment_type}
                                        onChange={e => setData('employment_type', e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    >
                                        <option value="">Select type</option>
                                        <option value="full-time">Full-time</option>
                                        <option value="part-time">Part-time</option>
                                        <option value="contract">Contract</option>
                                    </select>
                                    {errors.employment_type && <p className="mt-1 text-sm text-red-600">{errors.employment_type}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Experience Level <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        value={data.experience_level}
                                        onChange={e => setData('experience_level', e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    >
                                        <option value="">Select level</option>
                                        <option value="entry">Entry Level</option>
                                        <option value="mid">Mid Level</option>
                                        <option value="senior">Senior Level</option>
                                    </select>
                                    {errors.experience_level && <p className="mt-1 text-sm text-red-600">{errors.experience_level}</p>}
                                </div>
                            </div>

                            {/* Skills Required */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Required Skills (comma-separated)
                                </label>
                                <input
                                    type="text"
                                    value={data.skills_required.join(', ')}
                                    onChange={e => setData('skills_required', e.target.value.split(',').map(skill => skill.trim()))}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="e.g. React, Node.js, TypeScript"
                                />
                                {errors.skills_required && <p className="mt-1 text-sm text-red-600">{errors.skills_required}</p>}
                            </div>

                            {/* Application Deadline */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Application Deadline <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="date"
                                    value={data.deadline}
                                    onChange={e => setData('deadline', e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    min={new Date().toISOString().split('T')[0]}
                                    required
                                />
                                {errors.deadline && <p className="mt-1 text-sm text-red-600">{errors.deadline}</p>}
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="px-6 py-2 bg-[#4640DE] text-white rounded-lg hover:bg-[#3530A8] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                                >
                                    {processing ? 'Posting...' : 'Post Job'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}